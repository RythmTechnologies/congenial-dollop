import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const location = useLocation();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="flex flex-col items-center justify-center p-10 text-center">
        <p>404 - Sayfa Bulunamadı</p>
        <CardDescription>
          Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir.
          <pre>{JSON.stringify(location, null, 2)}</pre>
        </CardDescription>
        <Link to="/">
          <Button variant="contained" color="primary">
            Ana Sayfaya Dön
          </Button>
        </Link>
      </Card>
    </div>
  );
}
