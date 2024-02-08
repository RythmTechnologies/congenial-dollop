import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate("/", { replace: true });
  };
  return (
    <div className=" mt-40 flex items-center justify-center">
      <Card className="flex flex-col gap-y-2 items-center justify-center p-10 text-center border-0 sm:border sm:shadow-2xl sm:shadow-muted">
        <p>404 - Sayfa bulunamadı!</p>
        <CardDescription>
          Üzgünüz, aradığınız sayfayı bulamadık.
        </CardDescription>
        <Button onClick={handleNavigate} variant="outline" size="">
          Ana sayfaya dön
        </Button>
      </Card>
    </div>
  );
}
