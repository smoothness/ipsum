import type { SVGProps } from 'react';
import { AiOutlineDown, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from 'react-icons/ai';

type IconProps = {
	className?: string;
} & SVGProps<SVGSVGElement>;

export function InstagramIcon({ className, ...props }: IconProps) {
	return <AiOutlineInstagram aria-hidden="true" className={className} focusable="false" {...props} />;
}

export function WhatsAppIcon({ className, ...props }: IconProps) {
	return <AiOutlineWhatsApp aria-hidden="true" className={className} focusable="false" {...props} />;
}

export function ChevronDownIcon({ className, ...props }: IconProps) {
	return <AiOutlineDown aria-hidden="true" className={className} focusable="false" {...props} />;
}

export function PhoneIcon({ className, ...props }: IconProps) {
	return <AiOutlinePhone aria-hidden="true" className={className} focusable="false" {...props} />;
}

export function MailIcon({ className, ...props }: IconProps) {
	return <AiOutlineMail aria-hidden="true" className={className} focusable="false" {...props} />;
}

export function EnvironmentIcon({ className, ...props }: IconProps) {
	return <AiOutlineEnvironment aria-hidden="true" className={className} focusable="false" {...props} />;
}
