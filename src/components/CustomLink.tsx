import { Link } from "wouter";

interface Props {
  href: string;
  onClick: () => void;
  text: string;
}

const CustomLink = (props: Props) => {
  const { href, onClick, text } = props;
  return (
    <Link
      className={`navbar-item is-tab ${
        window.location.href === "/" && "is-active"
      }`}
      href={href}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
