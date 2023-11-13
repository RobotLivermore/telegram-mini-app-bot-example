"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnboardingModal({ isOpen, onClose }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  
                </Dialog.Title> */}
                <div className="flex flex-col items-center">
                  <a
                    href={`https://t.me/share/url?url=${
                      typeof window != "undefined"
                        ? window.encodeURIComponent(
                            "https://t.me/my_tg_twa_counter_bot"
                          )
                        : "https://t.me/my_tg_twa_counter_bot"
                    }&text=${
                      typeof window != "undefined"
                        ? window.encodeURIComponent("hello")
                        : "hello"
                    }`}
                  >
                    Share1
                  </a>
                  <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                    <a
                      className="a2a_dd"
                      href="https://www.addtoany.com/share"
                    ></a>
                    <a className="a2a_button_telegram"></a>
                  </div>
                  <a href={`https://t.me/share/embed?origin=${
                      typeof window != "undefined"
                        ? window.encodeURIComponent(
                            "https://t.me/my_tg_twa_counter_bot"
                          )
                        : "https://t.me/my_tg_twa_counter_bot"
                    }&text=${
                      typeof window != "undefined"
                        ? window.encodeURIComponent("hello")
                        : "hello"
                    }`}>Share2</a>
                </div>
                {/* <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-share-url="https://core.telegram.org/widgets/share"></script> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
