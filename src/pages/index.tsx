import DashboardPage from "@/app/dashboard/page";
import PageContainer from "@/components/layout/PageContainer";
import { useMemo } from "react";

export default function Home() {

  const memoValue = useMemo(() => {
    return (
      <DashboardPage />
    )
  }, [])

  return (
    <PageContainer>
      {memoValue}
    </PageContainer>
  );
}
