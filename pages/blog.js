import { useRouter } from "next/router";

export default function Blog(props, context) {
  console.log(props, context);
  const { locale, locales, defaultLocale } = useRouter();
  console.log(locale, locales, defaultLocale);
  return (
    <div>
      <span>Blog Component</span>
    </div>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: { d: "nnamd", context },
  };
};
