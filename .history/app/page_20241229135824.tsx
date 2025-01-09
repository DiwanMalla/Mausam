import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const page = () => {
  return;
  <QueryClientProvider client={QueryClient}>
    <div>page</div>
  </QueryClientProvider>;
};

export default page;
