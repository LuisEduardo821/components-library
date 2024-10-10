"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Progress
        value={progress}
        className="w-[60%]"
        progressIndicatorColor={cn({
          "bg-red-500": progress < 50,
          "bg-emerald-500": progress >= 50 && progress < 80,
          "bg-amber-500": progress >= 80,
        })}
      />
    </div>
  );
}
