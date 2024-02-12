import { Heading } from "@/components/ui/heading";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Rythm Blog</title>
        <meta name="description" content="Rythm Blog desc!" />
      </Helmet>
      <Heading
        level="h1"
        className="mb-4 px-4 !text-xl bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text"
      >
        Rythm Blog pek yakında...
      </Heading>
    </>
  );
}
