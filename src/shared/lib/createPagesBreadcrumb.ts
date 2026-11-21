import { ROUTER_PATHS } from "../constants";
import type { BreadcrumbItem } from "../ui/UIBreadcrumb";

interface CreatePagesBreadcrumbParams {
  pathname: string;
  carwashName?: string;
  serviceName?: string;
}

const decodeSegment = (segment: string) => {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
};

const pageTitles: Record<string, string> = {
  [ROUTER_PATHS.HOME]: "Главная",
  [ROUTER_PATHS.CARWASHES]: "Автомойки",
  [ROUTER_PATHS.SIGN_IN]: "Вход",
  [ROUTER_PATHS.OWNER_SIGN_IN]: "Вход для владельцев",
  [ROUTER_PATHS.USER]: "Мои записи",
  [ROUTER_PATHS.FAVORITE]: "Избранное",
  [ROUTER_PATHS.USER_REVIEWS]: "Мои отзывы",
  [ROUTER_PATHS.DASHBOARD]: "Дашборд",
  [ROUTER_PATHS.OWNER_CARWASH]: "Моя автомойка",
  [ROUTER_PATHS.BOOKINGS]: "Бронирования",
  [ROUTER_PATHS.OWNER_REVIEWS]: "Отзывы",
};

export const createPagesBreadcrumb = ({
  pathname,
  carwashName,
  serviceName,
}: CreatePagesBreadcrumbParams): BreadcrumbItem[] => {
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const segments = normalizedPath
    .split("/")
    .filter(Boolean)
    .map(decodeSegment);

  if (segments[0] === ROUTER_PATHS.CARWASHES.slice(1)) {
    if (segments.length === 1) {
      return [{ title: "Автомойки" }];
    }

    const carwashId = segments[1];
    if (!carwashId || segments.length > 5) {
      return [];
    }

    const carwashPath = `${ROUTER_PATHS.CARWASHES}/${encodeURIComponent(carwashId)}`;
    const crumbs: BreadcrumbItem[] = [
      { title: "Автомойки", to: ROUTER_PATHS.CARWASHES },
      {
        title: carwashName || `Автомойка ${carwashId}`,
        ...(segments.length > 2 ? { to: carwashPath } : {}),
      },
    ];

    if (segments.length === 2) {
      return crumbs;
    }

    const serviceId = segments[2];
    if (!serviceId) {
      return [];
    }

    const servicePath = `${carwashPath}/${encodeURIComponent(serviceId)}`;
    crumbs.push({
      title: serviceName || `Услуга ${serviceId}`,
      ...(segments.length > 3 ? { to: servicePath } : {}),
    });

    if (segments.length === 3) {
      return crumbs;
    }

    if (segments[3] !== ROUTER_PATHS.PAYMENT) {
      return [];
    }

    if (segments.length === 4) {
      crumbs.push({ title: "Оплата" });
      return crumbs;
    }

    if (
      segments.length === 5 &&
      segments[4] === ROUTER_PATHS.SUCCESS
    ) {
      crumbs.push({
        title: "Оплата",
        to: `${servicePath}/${ROUTER_PATHS.PAYMENT}`,
      });
      crumbs.push({ title: "Бронирование подтверждено" });
      return crumbs;
    }

    return [];
  }

  const pageTitle = pageTitles[normalizedPath];
  return pageTitle ? [{ title: pageTitle }] : [];
};
