import { useQuery } from "@tanstack/react-query";

export interface ServerStatusResponse {
  online: boolean;
  host: string;
  port: number;
  version?: string;
  players?: {
    online: number;
    max: number;
  };
}

export function useServerStatus() {
  return useQuery<ServerStatusResponse>({
    queryKey: ["server-status"],
    queryFn: async () => {
      const res = await fetch("https://api.mcstatus.io/v2/status/java/godlex.kymc.xyz:45799");
      if (!res.ok) throw new Error("Failed to fetch server status");
      const data = await res.json();
      return {
        online: data.online,
        host: data.host,
        port: data.port,
        version: data.version?.name_clean,
        players: data.players
          ? { online: data.players.online, max: data.players.max }
          : undefined,
      };
    },
    refetchInterval: 30000,
  });
}
