export function ProtectedPage({ isLogginIn , children}){
    if(isLogginIn){
        return <>{children}</>;
    }

}