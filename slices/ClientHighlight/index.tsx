import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ClientHighlight`.
 */
export type ClientHighlightProps =
  SliceComponentProps<Content.ClientHighlightSlice>;

/**
 * Component for "ClientHighlight" Slices.
 */
const ClientHighlight = ({ slice }: ClientHighlightProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for client_highlight (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ClientHighlight;
