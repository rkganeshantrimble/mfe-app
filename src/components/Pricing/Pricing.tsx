import React, { FC, ReactNode } from 'react';
import * as PropTypes from 'prop-types';
import './Pricing.scss';
import { renderPricing } from './PricingMethods';

/**
 * Represents the properties for the Pricing.
 * @interface PricingProps
 */
interface PricingProps {
  // onClick?: () => void;
  /**
   * An optional callback function that will be called when the Pricing is clicked.
   * @callback onClick
   * @returns {void} This function does not return anything.
   */
  /**
   * The text to be displayed by the Pricing.
   */
  text?: string;
  /**
   * The defaultCount to be displayed by the Pricing.
   */
  defaultCount?: string;
  /**
   * The className to be displayed by the Pricing.
   */
  className?: string;
  /**
   * Specifies whether the Pricing should respond to mouse events.
   */
  mouse?: boolean;
}

/**
 * Represents the Pricing.
 * @function
 * @param {PricingProps} props - The props for the Pricing.
 * @returns {JSX.Element | null} A JSX element representing the Pricing, or null if pricingContent is falsy.
 */
const Pricing = (props: PricingProps) => {
  const pricingContent = renderPricing(props);
  return pricingContent ? <>{pricingContent}</> : null;
};

export default Pricing;
/**
 * PropTypes for the Pricing component.
 * @static
 * @property {Function} onClick - An optional callback function to handle click events.
 * @property {string} text - The text to be displayed in the Pricing component.
 * @property {string} defaultCount - The default count value for the Pricing component.
 * @property {string} className - The class name to be applied to the Pricing component.
 * @property {boolean} mouse - Specifies whether the Pricing component should respond to mouse events.
 */
Pricing.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  defaultCount: PropTypes.string,
  className: PropTypes.string,
  mouse: PropTypes.bool,
};
