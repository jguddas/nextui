import {RefObject} from "react";
import {AriaButtonProps} from "@react-aria/button";
import {useAriaButton} from "@nextui-org/use-aria-button";
import {useFocusRing} from "@react-aria/focus";
import {dataAttr} from "@nextui-org/shared-utils";
import {mergeProps, useId} from "@react-aria/utils";
import {useLocalizedStringFormatter} from "@react-aria/i18n";

import intlMessages from "../intl";

export interface UseAriaDismissButtonProps extends AriaButtonProps {
  extendsLabeledBy?: string;
  extendsLabel?: string;
}

export function useAriaDismissButton(
  props: UseAriaDismissButtonProps = {},
  ref: RefObject<HTMLElement>,
) {
  const {extendsLabeledBy = "", extendsLabel = "", ...buttonOptions} = props;
  const id = useId();

  const stringFormatter = useLocalizedStringFormatter(intlMessages);
  const {buttonProps, isPressed} = useAriaButton(buttonOptions, ref);
  const {isFocusVisible, focusProps} = useFocusRing();

  console.log(stringFormatter.format("dismiss", {extendsLabel}), {extendsLabel});

  const dismissButtonProps = {
    id,
    role: "button",
    tabIndex: 0,
    "aria-labelledby": `${id} ${extendsLabeledBy}`,
    "aria-label": stringFormatter.format("dismiss", {extendsLabel}),
    "data-focus-visible": dataAttr(isFocusVisible),
    ...mergeProps(buttonProps, focusProps),
  };

  return {dismissButtonProps, isPressed};
}

export type UseAriaDismissButtonReturn = ReturnType<typeof useAriaDismissButton>;
