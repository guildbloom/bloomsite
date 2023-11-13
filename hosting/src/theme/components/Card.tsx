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
  float?: boolean;
};

export const CardFigure = tags.div<FigureProps>({
  ignore: ["outline", "float"],
})(({ outline = false }) => ({
  label: "card-figure",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  ...(outline
    ? {
        width: 70,
        height: 70,
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
            <Flex align="center" gap={16} wrap="wrap">
              {!(figure as any).props.float ? <Flex>{figure}</Flex> : null}
              <Flex column fill>
                {elements.map((el, key) => (
                  <Fragment key={key}>{el}</Fragment>
                ))}
              </Flex>
              {(figure as any).props.float ? <Flex>{figure}</Flex> : null}
            </Flex>
          ),
        }
      : { children: props.children };
  },
})(({ theme, variant }) => ({
  label: "card",
  background: variant === "dark" ? theme.dark : theme.light,
  color: variant === "dark" ? theme.light : undefined,
  padding: 16,
  borderRadius: 8,
  minHeight: 72,
}));
