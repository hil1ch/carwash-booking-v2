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
      //   {
      //     path: APP_PATHS.route.alloysSearch,
      //     element: <AlloysSearch />,
      //   },
      //   {
      //     path: APP_PATHS.route.article,
      //     element: <ArticlesPage />,
      //   },
      //   {
      //     path: APP_PATHS.route.payment,
      //     element: <PaymentPage />,
      //   },
      //   {
      //     path: APP_PATHS.route.contact,
      //     element: <ContactsPage />,
      //   },
      //   {
      //     path: APP_PATHS.route.delivery,
      //     element: <DeliveryPage />,
      //   },
      //   {
      //     path: APP_PATHS.route.carts,
      //     element: <CartsPage />,
      //   },
      //   {
      //     path: `${APP_PATHS.route.carts}/${APP_PATHS.route.order}`,
      //     element: <OrderPage />,
      //   },
      //   {
      //     path: `${APP_PATHS.route.carts}/${APP_PATHS.route.order}/${APP_PATHS.route.success}`,
      //     element: <SuccessOrderPage />,
      //   },
      //   {
      //     path: APP_PATHS.route.favorite,
      //     element: <FavoritePage />,
      //   },
      //   {
      //     path: APP_PATHS.route.visited,
      //     element: <WatchingProductsPage />,
      //   },
      //   {
      //     path: APP_PATHS.route.privacy,
      //     element: <PrivacyPage />,
      //   },
      //   {
      //     path: APP_PATHS.route.agreement,
      //     element: <AgreementPage />,
      //   },
    ],
  },
  //   {
  //     path: `${APP_PATHS.route.home}*`,
  //     element: <NotFoundPage />,
  //   },
]);
