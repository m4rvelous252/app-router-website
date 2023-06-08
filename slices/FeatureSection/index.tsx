import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FeatureSection`.
 */
export type FeatureSectionProps =
  SliceComponentProps<Content.FeatureSectionSlice>;

/**
 * Component for "FeatureSection" Slices.
 */
const FeatureSection = ({ slice }: FeatureSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feature_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeatureSection;
