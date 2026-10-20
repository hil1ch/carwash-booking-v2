import { createBrowserRouter, Outlet } from "react-router";

import { MainLayout } from "./layout/MainLayout";
import { ROUTER_PATHS } from "../shared/constants";

import { HomePage } from "../pages/home";
import { CarWashesPage } from "../pages/carwashes";

export const routes = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: ROUTER_PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTER_PATHS.CARWASHES,
        element: <CarWashesPage />,
      },
      //   {
      //     path: APP_PATHS.route.subCatalog,
      //     element: <SubCatalogPage />,
      //   },
      //   {
      //     path: `${APP_PATHS.route.catalog}/:categoryId`,
      //     element: <SubCatalogPage />,
      //   },
      //   {
      //     path: `${APP_PATHS.route.catalog}/:categoryId/:itemId`,
      //     element: <SubCatalogItemsPage />,
      //   },
      //   {
      //     path: `${APP_PATHS.route.catalog}/:categoryId/:itemId/:productId`,
      //     element: <SingleProductPage />,
      //   },
      //   {
      //     path: APP_PATHS.route.about,
      //     element: <AboutPage />,
      //   },
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
