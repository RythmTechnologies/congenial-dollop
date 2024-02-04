import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const location = useLocation();
  return (
    <div className=" mt-40 flex items-center justify-center">
      <Card className="flex flex-col items-center justify-center p-10 text-center">
        <p>404 - Sayfa Bulunamadı</p>
        <CardDescription>
          Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </CardDescription>
        <Link to="/" exact>
          <Button variant="contained" color="primary">
            Ana Sayfaya Dön
          </Button>
        </Link>
      </Card>
    </div>
  );
}
