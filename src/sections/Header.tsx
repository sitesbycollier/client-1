import { MainNavigationSection } from "./MainNavigationSection";

export const Header = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fefefe] shadow-sm">
      <MainNavigationSection />
    </header>
  );
};
