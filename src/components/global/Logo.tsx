import logoLarge from "/logo/logo-large.svg";
import logoMedium from "/logo/logo-medium.svg";
import logoSmall from "/logo/logo-small.svg";

function Logo() {
  return (
    <picture>
      <source media="(min-width:1024px)" srcSet={logoLarge} />
      <source media="(min-width:768px)" srcSet={logoMedium} />
      <img src={logoSmall} alt="NexGen Logo" />
    </picture>
  );
}
export default Logo;
