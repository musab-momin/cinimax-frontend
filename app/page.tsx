import cx from "classnames";
import classes from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={cx("container", classes.main)}>
      <section className="flex-bx-col gap3 text-center">
        <h1 className={classes.tag}>
          Connect, Watch, Enjoy <br /> Share Moments, Share Memories
        </h1>
        <div>
          <Link href={"/signup"} className={classes.startedBtn}>
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
