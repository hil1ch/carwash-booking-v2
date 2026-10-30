import { createBrowserRouter, Outlet } from "react-router";

import { MainLayout } from "./layout/MainLayout";
import { ROUTER_PATHS } from "../shared/constants";

import { HomePage } from "../pages/home";
import { CarWashesPage } from "../pages/carwashes";
import { SignInPage } from "../pages/sign-in";
import { CarwashPage } from "../pages/carwash";
import { DatePage } from "../pages/date";
import { PaymentPage } from "../pages/payment";
import { SuccessPage } from "../pages/success";
import { AccountLayout } from "./layout/AccountLayout";
import { UserOrdersPage } from "../pages/user-orders";
import { FavoritePage } from "../pages/favorite";
import { ReviewsPage } from "../pages/reviews";
import { OwnerLayout } from "./layout/OwnerLayout";
import { DashboardPage } from "../pages/dashboard";
import { OwnerCarwashesPage } from "../pages/owner-carwashes";
import { NotFoundPage } from "../pages/not-found";
import { OwnerBookingsPage } from "../pages/bookings";
import { OwnerReviewsPage } from "../pages/owner-reviews";

export const routes = createBrowserRouter([
  {
    path: ROUTER_PATHS.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTER_PATHS.SIGN_IN,
    element: <SignInPage />,
  },
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: ROUTER_PATHS.CARWASHES,
        element: <CarWashesPage />,
      },
      {
        path: `${ROUTER_PATHS.CARWASHES}/:carwashId`,
        element: <CarwashPage />,
      },
      {
        path: `${ROUTER_PATHS.CARWASHES}/:carwashId/:serviceId`,
        element: <DatePage />,
      },
      {
        path: `${ROUTER_PATHS.CARWASHES}/:carwashId/:serviceId/${ROUTER_PATHS.PAYMENT}`,
        element: <PaymentPage />,
      },
      {
        path: `${ROUTER_PATHS.CARWASHES}/:carwashId/:serviceId/${ROUTER_PATHS.PAYMENT}/${ROUTER_PATHS.SUCCESS}`,
        element: <SuccessPage />,
      },
    ],
  },
  {
    element: (
      <OwnerLayout>
        <Outlet />
      </OwnerLayout>
    ),
    children: [
      {
        path: ROUTER_PATHS.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: ROUTER_PATHS.OWNER_CARWASH,
        element: <OwnerCarwashesPage />,
      },
      {
        path: ROUTER_PATHS.BOOKINGS,
        element: <OwnerBookingsPage />,
      },
      {
        path: ROUTER_PATHS.OWNER_REVIEWS,
        element: <OwnerReviewsPage />,
      },
    ],
  },

  {
    element: (
      <AccountLayout>
        <Outlet />
      </AccountLayout>
    ),
    children: [
      {
        path: ROUTER_PATHS.USER,
        element: <UserOrdersPage />,
      },
      {
        path: ROUTER_PATHS.FAVORITE,
        element: <FavoritePage />,
      },
      {
        path: ROUTER_PATHS.USER_REVIEWS,
        element: <ReviewsPage />,
      },
    ],
  },

  {
    path: `${ROUTER_PATHS.HOME}*`,
    element: <NotFoundPage />,
  },
]);
