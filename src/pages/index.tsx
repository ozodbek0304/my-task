import HomePages from "@/components/home-pages/home";
import PageContainer from "@/components/layouts/layout";
import { useMemo } from "react";

export default function Home() {

  const memoValue = useMemo(() => {
    return (
      <HomePages />
    )
  }, [])

  return (
    <PageContainer>
      {memoValue}
    </PageContainer>
  );
}
