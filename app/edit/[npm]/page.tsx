import React from 'react'

//nama params harus params tidak boleh asalan
export default function EditPage({ params,
}: {
  params: {
    //nama yang ada di dalam params yg npm 
    //di bawah harus sama dengan nama folder slug
    npm: string
  }
}) {
  return <div>
    {atob(decodeURIComponent(params.npm))}
    </div>;
}
