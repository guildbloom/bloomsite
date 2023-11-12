import tags, { Flex } from "react-elevated-emotion";
import { primary } from "../variables";
import { Children, Fragment } from "react";

export const CardTitle = tags.h6({})({});
export const CardText = tags.p({})({
  margin: 0,
  color: primary,
  fontSize: 14,
  lineHeight: "17px",
});

type FigureProps = {
  outline?: boolean;
};

export const CardFigure = tags.div<FigureProps>({})(({ outline = true }) => ({
  label: "card-figure",
  width: 70,
  height: 70,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  ...(outline
    ? {
        border: "2px solid transparent",
        borderColor: primary,
        borderStyle: "dashed",
        borderRadius: "50%",
      }
    : {}),
}));
CardFigure.displayName = "CardFigure";

export const Card = tags.div({
  defaultProps(props) {
    const figure = Children.toArray(props.children)
      .filter((child: any) => child.type.displayName === CardFigure.displayName)
      .at(0);
    const elements = Children.toArray(props.children).filter(
      (child: any) => child.type.displayName !== CardFigure.displayName
    );
    return figure
      ? {
          children: (
            <Flex align="center" gap={16}>
              <Flex>{figure}</Flex>
              <Flex column fill>
                {elements.map((el, key) => (
                  <Fragment key={key}>{el}</Fragment>
                ))}
              </Flex>
            </Flex>
          ),
        }
      : { children: props.children };
  },
})(({ theme }) => ({
  label: "card",
  background: theme.light,
  padding: 16,
  borderRadius: 4,
  minHeight: 72,
  maxHeight: 125,
}));
