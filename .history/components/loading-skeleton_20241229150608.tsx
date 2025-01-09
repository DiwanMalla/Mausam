import { Skeleton } from "./ui/skeleton";

function WeatherSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        <Skeleton className="h-[300px] w-full rounded-lg" />
        <Skeleton />
        <div>
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </div>
  );
}
