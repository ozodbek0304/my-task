import SectionsFirst from "@/components/home-pages/section-first";
import PageContainer from "@/components/layouts/layout";
import { useMemo } from "react";

export default function Home() {

  const memoValue = useMemo(() => {
    return (
      <SectionsFirst />
    )
  }, [])

  return (
    <PageContainer>
      {memoValue}
    </PageContainer>
  );
}
