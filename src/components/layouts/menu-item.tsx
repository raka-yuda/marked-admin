import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { checkIsActive } from "../../helpers/router-helper";

interface Props {
  title: string;
  to: string;
}


const MenuItem = ({ title, to }: Props) => {
  const { pathname } = useRouter();
  const isActive = checkIsActive(pathname, to);

  return (
    <li
      className={`focus:bg-transparent ${
        isActive
          ? "border-l-4 border-sky-600 bg-gradient-to-r from-sky-200 to-transparent text-white"
          : "text-gray-400 border-transparent border-l-4 hover:border-sky-600 hover:text-sky-600"
      }`}
    >
      <Link href={to}>
        <a
          className={`${isActive ? "hover:bg-transparent" : "hover:bg-white"}`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
