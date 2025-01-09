import { queryClient, QueryClientProvider } from "@tanstack/react-query";

const page = () => {
  return{
  <QueryClientProvider client={queryClient}>
    <div>page</div>
  </QueryClientProvider>}
};

export default page;
