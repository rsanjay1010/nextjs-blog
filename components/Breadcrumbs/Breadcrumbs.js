import { useCallback, useEffect, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import utilsStyles from "../../styles/utils.module.scss";

const BreadCrumbs = (props) => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((ele) => ele);
  let currentPath = "";
  console.log(pathSegments);

  const paths = pathSegments.map((path, index) => {
    currentPath += `/${path}`;
    return (
      <Fragment key={index}>
        <span> / </span>
        <Link href={currentPath}>
          <a className={utilsStyles.titleCase}>{path}</a>
        </Link>
        <span> </span>
      </Fragment>
    );
  });

  return (
    <nav>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
        {paths}
      </p>
    </nav>
  );
};

export default BreadCrumbs;
