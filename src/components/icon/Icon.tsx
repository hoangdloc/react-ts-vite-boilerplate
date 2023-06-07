import { IconMap } from '~/components/icon/IconMap';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof IconMap;
}

const Icon: React.FC<IconProps> = ({
  name,
  width = '24',
  height = '24',
  ...rest
}) => {
  const MatchIcon = IconMap[name];

  return (
    <MatchIcon
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default Icon;
