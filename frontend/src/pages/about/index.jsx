import { useQuery } from "@tanstack/react-query";
import { Heading } from "@/components/ui/heading";
import { Skeleton } from "@/components/ui/skeleton";
import { getAbout } from "@/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });

  if (isLoading) {
    return (
      <div className="p-4 flex flex-col gap-y-4 w-full">
        <Skeleton className="w-2/5 sm:w-1/4 h-10 mb-4 bg-muted" />
        <Skeleton className="w-full h-[64px] sm:h-[92px] bg-muted" />
        <Skeleton className="w-full h-[280px] sm:h-[220px] bg-muted" />
      </div>
    );
  }

  if (error) {
    return (
      <>
        <Heading level="h1" className="mb-4 px-4">
          Hakkımızda
        </Heading>
        <div className="p-4">Error: {error.message}</div>
      </>
    );
  }

  return (
    <>
      <Heading level="h1" className="mb-4 px-4">
        Hakkımızda
      </Heading>
      <div className="p-4">
        <Card className="rounded-none sm:rounded-xl border-border/40">
          <CardHeader className="border-b border-border/40 rounded-0 sm:rounded-t-xl p-4 sticky top-14 backdrop-blur-md">
            <CardTitle>Rythm Technologies</CardTitle>
            <CardDescription>2024-01-01</CardDescription>
          </CardHeader>
          {data?.map((about, key) => (
            <CardContent
              key={key}
              className="p-4 border-b border-border/40 last:border-none"
            >
              <Heading level="h3" className="mb-2">
                {about.name}
              </Heading>
              <div dangerouslySetInnerHTML={{ __html: about.content }} />
            </CardContent>
          ))}
          <CardContent className="p-4 border-b border-border/40 last:border-none">
            <Heading level="h3" className="mb-2">
              📈 RythmTechnologies ile Geleceğe Yatırım
            </Heading>
            <div>
              Sürekli öğrenme ve gelişme ilkelerini benimsiyoruz. Teknolojideki
              hızlı değişimlere ayak uydurmaya çalışıyoruz Dünya çapında sizlere
              en güncel ve etkili çözümleri sunuyoruz.
            </div>
          </CardContent>
          <CardContent className="p-4 border-b border-border/40 last:border-none">
            <Heading level="h3" className="mb-2">
              🤝 Bize Katılın!
            </Heading>
            <div>
              Siz de Rhythm Technologies'in yenilikçi dünyasına katılmak ve iş
              süreçlerinizi dönüştürmek istiyorsanız bizimle iletişime geçin.
              Birlikte harika şeylere imza atalım!
              <div className="pt-4 font-bold tracking-wider uppercase">
                ℹ️ Info:
                <span>
                  <Button variant="link">
                    <Link to={"mailto:info@rythmtechnologies.com"}>
                      info@rythmtechnologies.com
                    </Link>
                  </Button>
                </span>
              </div>
              <span></span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
