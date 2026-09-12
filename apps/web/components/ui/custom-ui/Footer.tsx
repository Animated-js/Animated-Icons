


import Link from "next/link";
import { AnimatedOrgLink, ContributeLink, MITLicenseLink, RequestAnIconLink, TrademarkPolicyLicenseLink } from "@/lib/Links";

export function Footer() {
    return (
        <footer className="border-t bg-background/50 backdrop-blur-sm mt-20">
            <div className="mx-auto px-4 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between lg:gap-70 md:gap-40 gap-10">

                    <div className="flex flex-col gap-3 md:max-w-1/4 border-b md:border-none">
                        <h1 className="tracking-wide text-4xl flex items-center gap-2">
                            Animated Icons
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            An open-source library of customizable, copy-paste animated TSX icons for modern web applications.
                        </p>

                    </div>


                    <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 justify-end pt-1">

                        <div className="flex flex-col col-span-1 gap-3">
                            <h4 className="tracking-tighter font-medium text-lg text-foreground">
                                Library
                            </h4>
                            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="#icons" className="hover:underline underline-offset-2 hover:text-foreground transition-colors">
                                        All Icons
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs" className="hover:underline underline-offset-2 hover:text-foreground transition-colors">
                                        Docs
                                    </Link>
                                </li>
                                <li>
                                    <span className="flex items-center gap-1.5">
                                        NPM Package
                                        <span className="text-[10px] bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded font-mono">
                                            Soon
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col col-span-1s gap-2 tracking-tighter">
                            <h4 className="font-medium  tracking-tight text-lg text-foreground">
                                Community
                            </h4>
                            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                                <li>
                                    <a
                                        href={RequestAnIconLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-foreground hover:underline underline-offset-2 transition-colors"
                                    >
                                        Request an Icon
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={ContributeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-foreground hover:underline underline-offset-2 transition-colors"
                                    >
                                        Contribute
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={MITLicenseLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-foreground hover:underline underline-offset-2 transition-colors"
                                    >
                                        MIT License
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="flex flex-col col-span-1 lg:max-w-3/5 gap-2">

                            <h4 className="font-medium tracking-tighter text-lg text-foreground">
                                Legal
                            </h4>

                            <div className="flex flex-col">
                                <p className="text-sm text-muted-foreground">
                                    Code & generic icons are released under the{" "}
                                    <strong>
                                        MIT License
                                    </strong>.
                                </p>
                                <a
                                    href={TrademarkPolicyLicenseLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-foreground hover:underline underline-offset-2 text-sm transition-colors"
                                >
                                    Trademark Policy
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-tighter ">
                    <p>
                        © {new Date().getFullYear()} Animated Icons, An Open Source Project. <br />
                        <span className="pl-3">
                            By{" "}
                            <a href={AnimatedOrgLink} className="underline"
                                target="_blank"
                            >
                                ANIMATED ORG
                            </a>.
                        </span>
                    </p>
                    <p className="flex items-center gap-1">

                    </p>
                </div>
            </div>
        </footer >
    );
}
