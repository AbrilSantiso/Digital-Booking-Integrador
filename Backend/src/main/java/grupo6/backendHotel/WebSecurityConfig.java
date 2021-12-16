package grupo6.backendHotel;

import grupo6.backendHotel.security.JwtAuthenticationEntryPoint;
import grupo6.backendHotel.security.JwtRequestFilter;
import grupo6.backendHotel.service.Impl.UsersServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    private UsersServiceImpl jwtUserDetailsService;

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        // configure AuthenticationManager so that it knows from where to load
        // user for matching credentials
        // Use BCryptPasswordEncoder
        auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


    protected void configure(HttpSecurity http) throws Exception {
        // We don't need CSRF for this example
        http.cors().and().csrf().disable()
                // dont authenticate this particular request
                //.authorizeRequests().antMatchers("/users/login", "/users/register", "/error").permitAll().

                //enable all authorized users to access
                .authorizeRequests()
                .antMatchers( "/users/find/*",
                        "/categories/save", "/categories/update", "/categories/delete**",
                        "/characteristics**","/images**",
                        "/cities/save", "/cities/update", "/cities/delete**", "/cities/find**",
                        "/reservations/update", "/reservations/delete", "/reservations/all",
                        "/reviews/product**"
                        ).hasAuthority("owner")
                .antMatchers( "/products/save", "/products/update","/products/delete").hasAuthority("admin")
                .antMatchers("/reservations/save", "/reservations/user**", "/reviews/save").hasAnyAuthority("user")
                .antMatchers( "/products/*", "/cities/*", "/categories/*", "/users/register", "/users/login", "/users/getMe" ).anonymous().and()
                //Token only

                //.antMatchers( "/reservations/*").authenticated().and().

                //Token only
                

                //authenticate by Roles
                //.antMatchers("/images/*").hasAuthority("ADMIN").and().

                // all other requests need to be authenticated
                // anyRequest().authenticated().and().
                // make sure we use stateless session; session won't be used to
                // store user's state.
                .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Add a filter to validate the tokens with every request
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

}
