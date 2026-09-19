import React from 'react'

export type IconProps = Readonly<
  React.SVGProps<SVGSVGElement> & {
    className?: string
    alt?: string
  }
>

// Java Logo (Devicon)
export function JavaIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} {...props}>
      <path
        fill="#0074BD"
        d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
      />
      <path
        fill="#EA2D2E"
        d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
      />
      <path
        fill="#0074BD"
        d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
      />
      <path
        fill="#EA2D2E"
        d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
      />
      <path
        fill="#0074BD"
        d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
      />
    </svg>
  )
}

// User Custom SVG: Microsoft SQL Server
export function SqlServerIcon({ className = 'size-4', alt = 'SQL Server' }: IconProps) {
  return (
    <img
      src="/microsoft-sql-server-logo-svgrepo-com.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// RabbitMQ Logo (Simple-Icons)
export function RabbitMqIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="-2.5 -2.5 29 29" fill="#FF6600" className={className} {...props}>
      <path d="M23.035 9.601h-7.677a.956.956 0 01-.962-.962V.962a.956.956 0 00-.962-.956H10.56a.956.956 0 00-.962.956V8.64a.956.956 0 01-.962.962H5.762a.956.956 0 01-.961-.962V.962A.956.956 0 003.839 0H.959a.956.956 0 00-.956.962v22.076A.956.956 0 00.965 24h22.07a.956.956 0 00.962-.962V10.58a.956.956 0 00-.962-.98zm-3.86 8.152a1.437 1.437 0 01-1.437 1.443h-1.924a1.437 1.437 0 01-1.436-1.443v-1.917a1.437 1.437 0 011.436-1.443h1.924a1.437 1.437 0 011.437 1.443z" />
    </svg>
  )
}

// User Custom SVG: TypeScript
export function TypeScriptIcon({ className = 'size-4', alt = 'TypeScript' }: IconProps) {
  return (
    <img
      src="/typescript-official-svgrepo-com.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// Spring Boot Logo
export function SpringBootIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#6DB33F" className={className} {...props}>
      <path d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z" />
    </svg>
  )
}

// User Custom SVG: PostgreSQL ("postgrest")
export function PostgresIcon({ className = 'size-4', alt = 'PostgreSQL' }: IconProps) {
  return (
    <img
      src="/postgresql-logo-svgrepo-com.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// C# Logo
export function CSharpIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} {...props}>
      <path
        fill="#9B4F96"
        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
      />
      <path
        fill="#68217A"
        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
      />
      <path
        fill="#fff"
        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
      />
    </svg>
  )
}

// Kotlin Logo
export function KotlinIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      <defs>
        <linearGradient id="ktGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C757BC" />
          <stop offset="50%" stopColor="#7F52FF" />
          <stop offset="100%" stopColor="#00AFFF" />
        </linearGradient>
      </defs>
      <path fill="url(#ktGrad)" d="M24 24H0V0h24L12 12Z" />
    </svg>
  )
}

// Redis Logo
export function RedisIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#FF4438" className={className} {...props}>
      <path d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z" />
    </svg>
  )
}

// Docker Logo
export function DockerIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#2496ED" className={className} {...props}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
    </svg>
  )
}

// React Logo
export function ReactIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1.6"
      className={className}
      {...props}
    >
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.6" fill="#61DAFB" />
    </svg>
  )
}

// Python Logo
export function PythonIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      <path
        fill="#3776AB"
        d="M11.914 0C5.825 0 6.2 2.645 6.2 2.645l.006 2.74h5.814v.827H3.895S0 5.76 0 11.897c0 6.138 3.398 5.922 3.398 5.922h2.028v-2.85s-.11-3.398 3.342-3.398h5.759v-.855H8.769s-.027-.378-.027-.855v-3.72s.22-3.398 3.398-3.398c3.178 0 3.178 2.548 3.178 2.548v.855h1.709v-.855S17.433 0 11.914 0z"
      />
      <circle cx="8.88" cy="2.7" r="0.94" fill="#FFFFFF" />
      <path
        fill="#FFD43B"
        d="M12.086 24c6.089 0 5.714-2.645 5.714-2.645l-.006-2.74H11.98v-.827h8.125s3.895.452 3.895-5.685c0-6.138-3.398-5.922-3.398-5.922h-2.028v2.85s.11 3.398-3.342 3.398H9.473v.855h5.759s.027.378.027.855v3.72s-.22 3.398-3.398 3.398c-3.178 0-3.178-2.548-3.178-2.548v-.855H7.014v.855s-.406 5.545 5.072 5.545z"
      />
      <circle cx="15.12" cy="21.3" r="0.94" fill="#000000" />
    </svg>
  )
}

// User Custom SVG: JavaScript
export function JavaScriptIcon({ className = 'size-4', alt = 'JavaScript' }: IconProps) {
  return (
    <img
      src="/js-svgrepo-com.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// User Custom SVG: Linux
export function LinuxIcon({ className = 'size-4', alt = 'Linux' }: IconProps) {
  return (
    <img
      src="/linux-svgrepo-com.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// User Custom SVG: Oracle
export function OracleIcon({ className = 'size-4', alt = 'Oracle' }: IconProps) {
  return (
    <img
      src="/oracle-svgrepo-com.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// User Custom SVG: MySQL
export function MysqlIcon({ className = 'size-4', alt = 'MySQL' }: IconProps) {
  return (
    <img
      src="/mysql-svgrepo-com.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// MQTT Logo
export function MqttIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="-2.5 -2.5 29 29" fill="#660066" className={className} {...props}>
      <path d="M10.657 23.994h-9.45A1.212 1.212 0 0 1 0 22.788v-9.18h.071c5.784 0 10.504 4.65 10.586 10.386Zm7.606 0h-4.045C14.135 16.246 7.795 9.977 0 9.942V6.038h.071c9.983 0 18.121 8.044 18.192 17.956Zm4.53 0h-.97C21.754 12.071 11.995 2.407 0 2.372v-1.16C0 .55.544.006 1.207.006h7.64C15.733 2.49 21.257 7.789 24 14.508v8.291c0 .663-.544 1.195-1.207 1.195ZM16.713.006h6.092A1.19 1.19 0 0 1 24 1.2v5.914c-.91-1.242-2.046-2.65-3.158-3.762C19.588 2.11 18.122.987 16.714.005Z" />
    </svg>
  )
}

// MinIO Logo
export function MinioIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#C72E49" className={className} {...props}>
      <path d="M13.2072.006c-.6216-.0478-1.2.1943-1.6211.582a2.15 2.15 0 0 0-.0938 3.0352l3.4082 3.5507a3.042 3.042 0 0 1-.664 4.6875l-.463.2383V7.2853a15.4198 15.4198 0 0 0-8.0174 10.4862v.0176l6.5487-3.3281v7.621L13.7794 24V13.6817l.8965-.4629a4.4432 4.4432 0 0 0 1.2207-7.0292l-3.371-3.5254a.7489.7489 0 0 1 .037-1.0547.7522.7522 0 0 1 1.0567.0371l.4668.4863-.006.0059 4.0704 4.2441a.0566.0566 0 0 0 .082 0 .06.06 0 0 0 0-.0703l-3.1406-5.1425-.1484.1425.1484-.1445C14.4945.3926 13.8287.0538 13.2072.006Zm-.9024 9.8652v2.9941l-4.1523 2.1484a13.9787 13.9787 0 0 1 2.7676-3.9277 14.1784 14.1784 0 0 1 1.3847-1.2148z" />
    </svg>
  )
}

// WebRTC Logo
export function WebRtcIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 -3.5 256 256" className={className} {...props}>
      <g>
        <path
          d="M142.076578,191.086817 C142.076578,159.280656 116.294759,133.494615 84.4885969,133.494615 C52.6782136,133.494615 26.896394,159.280656 26.896394,191.086817 C26.896394,222.892979 52.6782136,248.67902 84.4885969,248.67902 C116.294759,248.67902 142.076578,222.892979 142.076578,191.086817"
          fill="#FF6600"
          transform="translate(84.486486, 191.086817) scale(1, -1) translate(-84.486486, -191.086817)"
        />
        <path
          d="M255.979703,110.454356 C255.979703,78.652416 230.197884,52.862153 198.391722,52.862153 C166.581339,52.862153 140.799519,78.652416 140.799519,110.454356 C140.799519,142.260518 166.581339,168.050781 198.391722,168.050781 C230.197884,168.050781 255.979703,142.260518 255.979703,110.454356"
          fill="#FFCC00"
          transform="translate(198.389611, 110.456467) scale(1, -1) translate(-198.389611, -110.456467)"
        />
        <path
          d="M115.200498,109.176452 C115.200498,77.3745125 89.4186786,51.5842495 57.6082953,51.5842495 C25.8063553,51.5842495 0.0203140271,77.3745125 0.0203140271,109.176452 C0.0203140271,140.982614 25.8063553,166.772877 57.6082953,166.772877 C89.4186786,166.772877 115.200498,140.982614 115.200498,109.176452"
          fill="#0089CC"
          transform="translate(57.610406, 109.178563) scale(1, -1) translate(-57.610406, -109.178563)"
        />
        <path
          d="M230.385749,191.086817 C230.385749,159.280656 204.603929,133.494615 172.789324,133.494615 C140.987384,133.494615 115.201343,159.280656 115.201343,191.086817 C115.201343,222.892979 140.987384,248.67902 172.789324,248.67902 C204.603929,248.67902 230.385749,222.892979 230.385749,191.086817"
          fill="#009939"
          transform="translate(172.793546, 191.086817) scale(1, -1) translate(-172.793546, -191.086817)"
        />
      </g>
    </svg>
  )
}

// FFmpeg Logo
export function FFmpegIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#007406" className={className} {...props}>
      <path d="M21.72 17.91V6.5l-.53-.49L9.05 18.52l-1.29-.06L24 1.53l-.33-.95-11.93 1-5.75 6.6v-.23l4.7-5.39-1.38-.77-9.11.77v2.85l1.91.46v.01l.19-.01-.56.66v10.6c.609-.126 1.22-.241 1.83-.36L14.12 5.22l.83-.04L0 21.44l9.67.82 1.35-.77 6.82-6.74v2.15l-5.72 5.57 11.26.95.35-.94v-3.16l-3.29-.18a64.66 64.66 0 0 0 1.28-1.23z" />
    </svg>
  )
}
export const FfmpegIcon = FFmpegIcon

// HLS Protocol Symbol
export function HlsIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="17" height="13" x="1.5" y="5.5" rx="2" />
      <polygon points="7 8.5 12 12 7 15.5 7 8.5" fill="currentColor" stroke="none" />
      <path d="M20.5 8.5a4 4 0 0 1 0 7" strokeWidth="1.8" />
      <path d="M22.8 6a7.5 7.5 0 0 1 0 12" strokeWidth="1.8" />
    </svg>
  )
}

// ThingsBoard Logo
export function ThingsBoardIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 320 320" className={className} {...props}>
      <g fill="#2A7DEC" transform="translate(0, -732.36)">
        <path d="M151.13 732.36c-28.363 0-54.915 7.915-77.613 21.537a36.58 36.58 0 0 0-23.067-8.194h-.004c-20.154.001-36.679 16.528-36.677 36.682v.01a36.7 36.7 0 0 0 8.103 22.928c-13.83 22.83-21.87 49.58-21.87 78.17a8.766 8.766 0 1 0 17.53 0c0-24.702 6.72-47.748 18.379-67.574 4.566 1.985 9.472 3.15 14.519 3.157h.012c20.155 0 36.683-16.527 36.682-36.682v-.004c-.001-5-1.138-9.863-3.083-14.397 19.717-11.484 42.585-18.095 67.085-18.095a8.766 8.766 0 1 0 0-17.53zM50.44 763.24c5.913.002 11.191 2.512 14.836 7.077a9 9 0 0 0 .183.214 19.14 19.14 0 0 1 4.134 11.863c-.002 10.677-8.468 19.144-19.144 19.148a19.15 19.15 0 0 1-12-4.254l-.013-.01a19.14 19.14 0 0 1-7.144-14.892c.003-10.677 8.47-19.144 19.148-19.146" />
        <path
          fillRule="evenodd"
          d="M66.992 835.19a8.2 8.2 0 0 0-2.258 6.071 8.6 8.6 0 0 0 2.338 5.518c6.805 6.856 20.223 20.223 20.223 20.223l11.844-11.83s-12.973-12.961-20.176-20.171c-1.604-1.633-3.75-2.314-6.012-2.324a8.15 8.15 0 0 0-5.96 2.512zm32.147 19.983L62.5 891.812c-3.975 3.976-3.975 10.421 0 14.397l18.156 18.156 31.753 31.753 30.478 30.478c3.976 3.976 10.422 3.976 14.398 0l24.791-24.791 37.914-37.914 36.639-36.639c3.975-3.976 3.975-10.422 0-14.398l-18.63-18.63-31.75-31.76-30.01-30c-3.977-3.975-10.422-3.975-14.398 0l-24.79 24.79-37.91 37.91z"
        />
      </g>
    </svg>
  )
}

// Camera / ONVIF Icon
export function CameraIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00B4D8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
      <rect width="14" height="12" x="2" y="6" rx="2" stroke="#00B4D8" />
      <circle cx="9" cy="12" r="2" fill="#00B4D8" />
    </svg>
  )
}

// WebSocket Icon
export function WebSocketIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10B981"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M8 3 4 7l4 4" />
      <path d="M4 7h16" />
      <path d="m16 21 4-4-4-4" />
      <path d="M20 17H4" />
    </svg>
  )
}

// Vite Logo
export function ViteIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...props}>
      <path
        fill="#FFC920"
        d="M29.6 4.9 16.9 29.5c-.3.7-1.3.7-1.6 0L2.4 4.9c-.4-.7.1-1.5.9-1.5h7.2l5.6 11.5 5.6-11.5h7c.8 0 1.3.8.9 1.5z"
      />
      <path
        fill="#BD34FE"
        d="m19.8 3.5-3.8 7.8-3.8-7.8H2.4l13.6 26.5 13.6-26.5h-9.8z"
        opacity=".15"
      />
      <path fill="#41D1FF" d="m20.9 4.3-4.9 10-4.9-10h-6l10.9 21.2L26.9 4.3h-6z" opacity=".2" />
      <path fill="#FFD859" d="M20.2 3.4 16 11.9 11.8 3.4h-3l7.2 14.5L23.2 3.4h-3z" />
      <path fill="#BD34FE" d="M28.3 3.6 16 27.6 3.7 3.6h4.5l7.8 15.2 7.8-15.2h4.5z" />
    </svg>
  )
}

// Tailwind CSS Logo
export function TailwindIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#06B6D4" className={className} {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  )
}

// Cloudflare Logo
export function CloudflareIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#F38020" className={className} {...props}>
      <path d="M18.97 12.27a4.99 4.99 0 0 0-4.83-4.14c-.38 0-.74.05-1.09.14a7.48 7.48 0 0 0-7.05 4.9A5.48 5.48 0 0 0 1 18.25C1 21.43 3.57 24 6.75 24h12.5A4.75 4.75 0 0 0 24 19.25a4.74 4.74 0 0 0-5.03-6.98z" />
    </svg>
  )
}

// Zustand Logo
export function ZustandIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...props}>
      <path
        fill="#8B5A2B"
        d="M26 12c0-2.2-1.8-4-4-4-.4 0-.7.1-1.1.2C19.5 6.9 17.8 6 16 6s-3.5.9-4.9 2.2c-.4-.1-.7-.2-1.1-.2-2.2 0-4 1.8-4 4 0 1.2.5 2.2 1.3 3-.2.9-.3 1.9-.3 3 0 5 4.5 9 10 9s10-4 10-9c0-1.1-.1-2.1-.3-3 .8-.8 1.3-1.8 1.3-3z"
      />
      <circle cx="12" cy="15" r="1.5" fill="#FFFFFF" />
      <circle cx="20" cy="15" r="1.5" fill="#FFFFFF" />
      <circle cx="12" cy="15" r="0.8" fill="#111111" />
      <circle cx="20" cy="15" r="0.8" fill="#111111" />
      <ellipse cx="16" cy="19.5" rx="3.5" ry="2.2" fill="#DEB887" />
      <polygon points="16,18.5 15,19.8 17,19.8" fill="#111111" />
    </svg>
  )
}

// GitHub Logo
export function GitHubIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
      />
    </svg>
  )
}

// GitLab Logo
export function GitLabIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      <path
        fill="#FC6D26"
        d="m23.6 9.6-2.5-7.7c-.2-.6-.9-.8-1.4-.3l-3.3 3.3H7.6L4.3 1.6c-.5-.5-1.2-.3-1.4.3L.4 9.6c-.2.5 0 1.1.4 1.4l11.2 8.4 11.2-8.4c.4-.3.6-.9.4-1.4z"
      />
      <path fill="#E24329" d="m12 19.4-4.4-14.5h8.8L12 19.4z" />
      <path fill="#FCA326" d="M12 19.4 7.6 4.9H4.3l7.7 14.5zm0 0 4.4-14.5h3.3L12 19.4z" />
    </svg>
  )
}

// User Custom SVG: Postman
export function PostmanIcon({ className = 'size-4', alt = 'Postman' }: IconProps) {
  return (
    <img
      src="/getpostman-icon.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// User Custom SVG: Jira
export function JiraIcon({ className = 'size-4', alt = 'Jira' }: IconProps) {
  return (
    <img
      src="/jira-svgrepo-com.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// User Custom SVG: LinkedIn
export function LinkedinIcon({ className = 'size-4', alt = 'LinkedIn' }: IconProps) {
  return (
    <img
      src="/linkedin-1-svgrepo-com.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// User Custom SVG: Telegram
export function TelegramIcon({ className = 'size-4', alt = 'Telegram' }: IconProps) {
  return (
    <img
      src="/telegram.svg"
      alt={alt}
      className={`${className} inline-block shrink-0 object-contain`}
    />
  )
}

// Nginx Logo
export function NginxIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#009639" className={className} {...props}>
      <path d="M12 0L1.605 6v12L12 24l10.395-6V6zm0 2.227l8.468 4.89v9.766L12 21.773l-8.468-4.89V7.117zm-4.303 5.385v8.776h2.246v-5.26l4.114 5.26h2.246V7.612h-2.246v5.26l-4.114-5.26z" />
    </svg>
  )
}

// SSL / TLS Security Shield
export function SslIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" fill="#10B981" />
      <path d="M10 11V9a2 2 0 1 1 4 0v2" />
    </svg>
  )
}

// VietMap API Logo
export function VietmapIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...props}>
      <circle cx="16" cy="16" r="15" fill="#E62129" />
      <path d="M9 10.5h4.2l3.8 8.8 3.8-8.8H25l-6.8 14.5h-4.4L9 10.5z" fill="#FFFFFF" />
      <circle cx="21.5" cy="9.5" r="2" fill="#FFCC00" />
    </svg>
  )
}

// Apache POI Logo
export function ApachePoiIcon({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      <path
        fill="#D22128"
        d="M19.16 2.57c-2.3 0-5.1 2.3-6.9 4.3L19.5 14c.4-.7.6-1.5.6-2.4 0-3.9-3.2-7.1-7.1-7.1-.6 0-1.2.1-1.8.2 1.9-1.4 4.5-2.1 7.9-2.1z"
      />
      <path
        fill="#2B3990"
        d="M4.5 21.43c2.3 0 5.1-2.3 6.9-4.3L4.16 10c-.4.7-.6 1.5-.6 2.4 0 3.9 3.2 7.1 7.1 7.1.6 0 1.2-.1 1.8-.2-1.9 1.4-4.5 2.1-7.9 2.1z"
      />
      <path
        fill="#F37023"
        d="M18.8 8.2 8.2 18.8c.8.8 1.8 1.4 3 1.7L19.9 9.8c-.3-1-.6-1.3-1.1-1.6z"
      />
    </svg>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function getTechIcon(name: string, className = 'size-4') {
  const n = name.toLowerCase().trim()
  if (n.includes('sql server') || n.includes('mssql'))
    return <SqlServerIcon className={className} />
  if (n.includes('java') && !n.includes('script')) return <JavaIcon className={className} />
  if (n.includes('kotlin')) return <KotlinIcon className={className} />
  if (n.includes('typescript') || n === 'ts') return <TypeScriptIcon className={className} />
  if (n.includes('javascript') || n === 'js') return <JavaScriptIcon className={className} />
  if (n.includes('python')) return <PythonIcon className={className} />
  if (n.includes('c#') || n.includes('csharp')) return <CSharpIcon className={className} />
  if (n.includes('spring')) return <SpringBootIcon className={className} />
  if (n.includes('react')) return <ReactIcon className={className} />
  if (n.includes('vite')) return <ViteIcon className={className} />
  if (n.includes('tailwind')) return <TailwindIcon className={className} />
  if (n.includes('zustand')) return <ZustandIcon className={className} />
  if (n.includes('cloudflare')) return <CloudflareIcon className={className} />
  if (n.includes('poi') || n.includes('apache')) return <ApachePoiIcon className={className} />
  if (n.includes('gitlab')) return <GitLabIcon className={className} />
  if (n.includes('github') || n === 'git') return <GitHubIcon className={className} />
  if (n.includes('linkedin') || n.includes('linkin')) return <LinkedinIcon className={className} />
  if (n.includes('telegram')) return <TelegramIcon className={className} />
  if (n.includes('postman')) return <PostmanIcon className={className} />
  if (n.includes('jira')) return <JiraIcon className={className} />
  if (n.includes('nginx')) return <NginxIcon className={className} />
  if (n.includes('ssl') || n.includes('tls')) return <SslIcon className={className} />
  if (n.includes('vietmap')) return <VietmapIcon className={className} />
  if (n.includes('docker')) return <DockerIcon className={className} />
  if (n.includes('linux') || n.includes('ubuntu') || n.includes('debian'))
    return <LinuxIcon className={className} />
  if (n.includes('postgres') || n.includes('postgrest'))
    return <PostgresIcon className={className} />
  if (n.includes('redis')) return <RedisIcon className={className} />
  if (n.includes('mysql')) return <MysqlIcon className={className} />
  if (n.includes('oracle')) return <OracleIcon className={className} />
  if (n.includes('mqtt') || n.includes('mosquitto')) return <MqttIcon className={className} />
  if (n.includes('rabbit')) return <RabbitMqIcon className={className} />
  if (n.includes('webrtc')) return <WebRtcIcon className={className} />
  if (n.includes('ffmpeg')) return <FFmpegIcon className={className} />
  if (n.includes('hls')) return <HlsIcon className={className} />
  if (n.includes('thingsboard')) return <ThingsBoardIcon className={className} />
  if (n.includes('camera') || n.includes('onvif')) return <CameraIcon className={className} />
  if (n.includes('websocket') || n.includes('socket.io'))
    return <WebSocketIcon className={className} />
  if (n.includes('minio')) return <MinioIcon className={className} />
  return null
}
