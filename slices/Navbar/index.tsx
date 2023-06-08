import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Navbar`.
 */
export type NavbarProps = SliceComponentProps<Content.NavbarSlice>;

/**
 * Component for "Navbar" Slices.
 */
const Navbar = ({ slice }: NavbarProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for navbar (variation: {slice.variation}) Slices
    </section>
  );
};

export default Navbar;
