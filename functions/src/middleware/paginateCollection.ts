import { RequestHandler } from "express";
import { store } from "../app";
import { Query, DocumentData } from "firebase-admin/firestore";

// A comparison operation in the form of a string. Acceptable
// operator strings are "<", "<=", "==", "!=", ">=", ">",
// "array-contains", "in", "not-in", and "array-contains-any".
export enum FilterOperation {
  "lessThan" = "<",
  "lessEqual" = "<=",
  "equals" = "==",
  "not" = "!=",
  "greatEqual" = ">=",
  "greaterThan" = ">",
  "arrayContains" = "array-contains",
  "in" = "in",
  "notIn" = "not-in",
  "arrayContainsAny" = "array-contains-any",
}

export type Filter = {
  operation: FilterOperation;
  key: string;
  value: any;
};

export function paginateCollection(collectionName: string): RequestHandler {
  return async (req, res) => {
    try {
      const { pageSize = 20, pageOffset = 0, filters = {} } = req.body;

      // Construct query with filters
      let query = store.collection(collectionName) as Query<DocumentData>;
      for (const key in filters) {
        query = query.where(key, "==", filters[key]);
      }

      // Get total documents count for calculation of totalPages
      const totalDocuments = (await query.get()).size;
      const totalPages = Math.ceil(totalDocuments / pageSize);

      // Apply pagination
      query = query.limit(pageSize).offset(pageSize * pageOffset);

      const snapshot = await query.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });

      res.json({
        data,
        currentPage: pageOffset + 1,
        totalDocuments,
        totalPages,
      });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ message: err?.message });
    }
  };
}
