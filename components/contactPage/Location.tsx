import MyInfo from "../MyInfo"

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260534.52747512204!2d17.701880006374193!3d59.32584138311499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1sen!2sse!4v1666978319596!5m2!1sen!2sse"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Stockholm, Sweden" />
        <MyInfo field="email" value="islamarafat171@gmail.com" />
        <MyInfo field="phone" value="+123 654 78900" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  )
}
