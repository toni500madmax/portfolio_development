import { LI, Link } from "../Style";

export type Props = {
  children: string;
  Href: string;
  Target?: string;
};

const ListLinks = (props: Props) => {
  return (
    <>
      <LI>
        <Link href={props.Href} target={props.Target}>
          {props.children}
        </Link>
      </LI>
    </>
  );
};

export default ListLinks;
