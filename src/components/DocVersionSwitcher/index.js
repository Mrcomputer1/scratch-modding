import React from 'react';
import Link from '@docusaurus/Link';

export default function DocVersionSwitcher({
    label, versions, active, ...props
}) {
    return <div class="dropdown dropdown--hoverable" style={{ marginBottom: "1rem" }} {...props}>
        <button class="button button--primary">{label ?? 'Tutorial Version'}: {versions[active].name}</button>
        <ul class="dropdown__menu">
            {Object.values(versions).map(version => <li>
                <Link class="dropdown__link" to={version.path}>
                    {version.name}
                </Link>
            </li>)}
        </ul>
    </div>
};