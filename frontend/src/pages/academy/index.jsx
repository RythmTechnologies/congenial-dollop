import { Heading } from "@/components/ui/heading";
import { Helmet } from "react-helmet-async";

export default function Academy() {
  return (
    <>
      <Helmet>
        <title>Rythm Akademi</title>
        <meta name="description" content="Rythm Tecnologies akademi desc!" />
      </Helmet>
      <Heading
        level="h1"
        className="mb-4 px-4 !text-xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
      >
        Rythm Akademi pek yakında...
      </Heading>
    </>
  );
}
