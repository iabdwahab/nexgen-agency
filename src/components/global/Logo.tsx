import logoMedium from "/logo/logo-medium.svg";
import logoSmall from "/logo/logo-small.svg";

function Logo() {
  return (
    <picture>
      <source media="(min-width:1024px)" srcSet={logoMedium} />
      <img src={logoSmall} alt="NexGen Logo" />
    </picture>
  );
}
export default Logo;
