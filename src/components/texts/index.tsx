import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface ITextProps extends ComponentPropsWithoutRef<"p"> {
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  color?: string;
  fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "normal"
    | "bold";
  lineHeight?: number;
  textAlign?: "center" | "left" | "right";
}

export const Title1 = styled.h1<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "900")};
  font-size: 72px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 72)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Title2 = styled.h2<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "800")};
  font-size: 64px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 64)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Title3 = styled.h3<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "700")};
  font-size: 56px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 56)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Title4 = styled.h4<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "600")};
  font-size: 48px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 48)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Title5 = styled.h5<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "500")};
  font-size: 36px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 36)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Title6 = styled.h6<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "400")};
  font-size: 28px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 28)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Body1 = styled.p<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "500")};
  font-size: 24px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 24)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;

  text-align: ${(p) => (p.textAlign ? p.textAlign : "inherit")};
`;

export const Body2 = styled.p<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "500")};
  font-size: 22px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 22)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Body3 = styled.p<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "500")};
  font-size: 20px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 20)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Body4 = styled.p<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "500")};
  font-size: 18px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 18)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Body5 = styled.p<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "500")};
  font-size: 16px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 16)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const Body6 = styled.p<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "500")};
  font-size: 14px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 14)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;

export const CaptionText = styled.p<ITextProps>`
  font-family: PlusJakarta;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "500")};
  font-size: 12px;
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : 12)}px;
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}rem;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}rem;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}rem;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}rem;
`;
