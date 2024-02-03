import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { slug } = useParams();

  return <>project detail {slug}</>;
}
