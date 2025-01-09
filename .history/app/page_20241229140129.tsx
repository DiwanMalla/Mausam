"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>page</div>
    </QueryClientProvider>
  );
};

export default page;
