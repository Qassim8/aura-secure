import { createNavigation } from "next-intl/navigation";
import { routingConfig } from "./config";

export const routing = routingConfig;

export const { Link, useRouter, usePathname } = createNavigation(routing);
