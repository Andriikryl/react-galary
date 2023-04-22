import { CommonClassProps, Photo } from "../types";

interface NavigationProps extends CommonClassProps {
  disabledPrev: boolean;
  disabledNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  disabledNext,
  disabledPrev,
  onNextClick,
  onPrevClick,
}) => <div>Navigation</div>;
