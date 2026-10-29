import { Divider, Radio } from "antd";

import googlePayMethod from "../assets/google-pay-svgrepo-com.svg";
import mastercardMethod from "../assets/mastercard.svg";
import mirMethod from "../assets/mir.svg";
import sbpMethod from "../assets/sbp.svg";
import visaMethod from "../assets/visa.svg";
import { UIButton } from "../../../shared/ui/UIButton";

import { LockKeyhole } from "lucide-react";

export const PaymentPage = () => {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="grid grid-cols-2 text-left gap-10">
        <div className="flex flex-col gap-5">
          <h5 className="font-semibold">Способ оплаты</h5>
          <Radio.Group
            //   onChange={onChange}
            defaultValue="a"
            className="flex! flex-col gap-2 text-base! font-medium"
            block
          >
            <Radio.Button
              className="flex! items-center! w-full! rounded-lg! text-center p-3! text-base! [&>span:last-child]:block! [&>span:last-child]:w-full!"
              value="a"
            >
              <div className="flex w-full items-center justify-between gap-4">
                <span>Банковская карта</span>
                <div className="flex items-center gap-4">
                  <img
                    src={visaMethod}
                    alt="Карта Visa"
                    className="w-8 h-auto"
                  />
                  <img
                    src={mastercardMethod}
                    alt="Карта Mastercard"
                    className="w-8 h-auto"
                  />
                  <img src={mirMethod} alt="Карта Mir" className="w-8 h-auto" />
                </div>
              </div>
            </Radio.Button>
            <Radio.Button
              value="b"
              className="rounded-lg! text-center p-3! text-base!"
            >
              <div className="flex items-center justify-between gap-4">
                <span>СБП (Система быстрых платежей)</span>
                <img
                  src={sbpMethod}
                  alt="Система быстрых платежей"
                  className="w-8 h-auto"
                />
              </div>
            </Radio.Button>
            <Radio.Button
              className="rounded-lg! text-center p-3! text-base!"
              value="c"
            >
              <div className="flex items-center justify-between gap-4">
                <span>СБП (Через приложение банка)</span>
                <img
                  src={sbpMethod}
                  alt="Система быстрых платежей"
                  className="w-8 h-auto"
                />
              </div>
            </Radio.Button>
            <Radio.Button
              className="rounded-lg! text-center p-3! text-base!"
              value="d"
            >
              <div className="flex items-center justify-between gap-4">
                <span>Google Pay / Apple Pay</span>
                <img
                  src={googlePayMethod}
                  alt="Google Pay / Apple Pay"
                  className="w-8 h-auto"
                />
              </div>
            </Radio.Button>
          </Radio.Group>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-xl">Итого</h3>
          <div className="border border-blue-100 py-5 px-4 rounded-xl bg-white w-full">
            <div className="flex flex-col gap-5 text-gray-600 font-medium">
              <div className="flex items-center justify-between">
                <span>Мойка кузова + салон</span>
                <span>1 200 Р</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Скидка</span>
                <span>0 Р</span>
              </div>
            </div>
            <Divider />
            <div className="flex items-center justify-between font-bold text-lg">
              <p>Итого к оплате</p>
              <span>1 200 Р</span>
            </div>
          </div>
          <UIButton>Оплатить</UIButton>
          <div className="flex items-center gap-2 justify-center">
            <LockKeyhole size={16} />
            <p className="text-gray-600 text-xs font-medium">
              Ваши данные защищены
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
