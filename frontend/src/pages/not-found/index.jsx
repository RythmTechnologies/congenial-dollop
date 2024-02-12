import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate("/", { replace: true });
  };
  return (
    <>
      <Helmet>
        <title>Sayfa bulunamadı | 404</title>
        <meta name="description" content="Rythm Tecnologies 404 desc!" />
      </Helmet>

      <div className="p-4 mt-40 flex items-center justify-center">
        <Card className="flex flex-col gap-y-2 items-center justify-center p-10 text-center border border-border/40 shadow-2xl shadow-muted">
          <p>404 - Sayfa bulunamadı!</p>
          <CardDescription>
            Üzgünüz, aradığınız sayfayı bulamadık.
          </CardDescription>
          <Button
            onClick={handleNavigate}
            variant="outline"
            className="border-border/40"
          >
            Ana sayfaya dön
          </Button>
        </Card>
      </div>
    </>
  );
}
