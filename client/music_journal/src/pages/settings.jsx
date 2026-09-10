
export function Settings({ user }) {
    return (
        <div>
            {user ? <p>User logged in</p> : <p>Need to login in to use this feature</p>}
        </div>
    )
}
