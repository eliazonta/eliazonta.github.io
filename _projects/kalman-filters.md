---
layout: distill
title: Kalman Filters
description: A gentle introduction to Kalman filters and a simple application
img: assets/img/kalman1.gif
importance: 1
category: fun
related_publications: true
authors:
  - name: Elia Zonta 
    url: 
    affiliations:
      name: DISMA, Politecnico di Torino

bibliography: 2025-04-01-kalman.bib

---

### Abstract:

This small paper presents a compact overview of the Kalman Filter, a recursive solution to the linear filtering problem. Widely used in control systems and signal processing, the Kalman Filter also has compelling applications in financial modeling. We provide a brief mathematical formulation followed by a Python-based example in the financial domain.

⸻

### Introduction

The Kalman Filter is an efficient recursive estimator that computes the state of a linear dynamic system from a series of noisy measurements <d-cite key="kalman1960new"></d-cite><d-cite key="kalman1963mathematical"></d-cite>. Originally developed for aerospace navigation, its robustness and adaptability have made it a staple in diverse fields such as robotics, economics, and finance.

In financial systems, the Kalman Filter can be employed to estimate **latent variables** like trends or volatility, filter noise from time series, or adaptively model changing systems<d-cite key="kalman1965new"></d-cite>.

<div class="row mt-3">
    <div class="col">
        {% include figure.liquid loading="eager" path="assets/img/kalman1.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    A schematic layout of the Kalman Filter.
</div>

### Mathematical Formulation

A Kalman Filter models a system as a discrete-time linear dynamical system:

* **State Equation:**
\begin{equation}
\label{eq:state-eq}
x_{t} = A x_{t-1} + B u_{t} + w_{t}, \quad w_{t} \sim \mathcal{N}(0, Q)
\end{equation}

* **Measurement Equation:**

\begin{equation}
\label{eq:measurment-eq}
z_{t} = H x_{t} + v_{t}, \quad v_{t} \sim \mathcal{N}(0, R)
\end{equation}

Where:
* $x_t$: state vector
* $z_t$: observation vector
* $A$: state transition matrix
* $B$: control input matrix
* $u_t$: control vector
* $H$: observation matrix
* $Q$, $R$: process and observation noise covariances

The filter operates in two steps:
* **Predict**: estimate the state and covariance at time t given values at $t-1$ with the following equation.

\begin{equation}
\label{eq:predict-eq}
\hat{x}{t|t-1} = A \hat{x}{t-1|t-1} + B u_t
P_{t|t-1} = A P_{t-1|t-1} A^T + Q
\end{equation}

* **Update**: incorporate new measurements to refine the estimates.

\begin{equation}
\label{eq:update-eq}
K_t = P_{t|t-1} H^T (H P_{t|t-1} H^T + R)^{-1}
\hat{x}{t|t} = \hat{x}{t|t-1} + K_t (z_t - H \hat{x}{t|t-1})
P{t|t} = (I - K_t H) P_{t|t-1}
\end{equation}


### Example: Estimating True Price from Noisy Observations

Let’s consider a toy example: estimating the true value of a stock price hidden behind noisy observations.

Key Assumptions:
* The true price follows a **random walk**: $x_t = x_{t-1} + w_t$
* Observed price is: $z_t = x_t + v_t$

This aligns with Kalman filter structure, where:
* $A = 1$, $H = 1$
* $B = 0$, no control input
* $Q$ and $R$ are small and fixed

### Implementation

```python
import numpy as np
import matplotlib.pyplot as plt
plt.style.use('classic')


np.random.seed(42)
n = 1000
true_price = np.cumsum(np.random.normal(0, 1, n))  # Random walk
observed_price = true_price + np.random.normal(0, 2, n)  # Add noise

# Kalman Filter initialization
x_est = np.zeros(n)      # Estimated state
P = np.zeros(n)          # Estimated error covariance
x_est[0] = observed_price[0]
P[0] = 1

A = 1 # Model Trend
H = 1
Q = 0.1 # Trust in model
R = 4  # Observation noise variance (Trust in measurements)

for t in range(1, n):
    # Predict
    x_pred = A * x_est[t-1]
    P_pred = A * P[t-1] * A + Q

    # Update
    K = P_pred * H / (H * P_pred * H + R)
    x_est[t] = x_pred + K * (observed_price[t] - H * x_pred)
    P[t] = (1 - K * H) * P_pred

# Plotting
plt.figure(figsize=(10, 5))
plt.plot(true_price, label='True Price', linestyle='--')
plt.plot(observed_price, label='Observed Price', alpha=0.6)
plt.plot(x_est, label='Kalman Estimate')
plt.legend()
plt.title('Kalman Filter Estimation of Noisy Financial Time Series')
plt.xlabel('Time')
plt.ylabel('Price')
plt.grid(True)
plt.show()

```

<div class="row mt-3">
    <div class="col">
        {% include figure.liquid loading="eager" path="assets/img/kalman_filter_estimation.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Resulting plot.
</div>

### Conclusion

Kalman Filters provide a powerful, recursive means of estimating hidden variables from noisy data streams. In financial applications, they serve as tools for smoothing price series, adaptive modeling, and much more. While this example assumes linear dynamics, extensions such as the Extended and Unscented Kalman Filters can handle **nonlinear systems** commonly encountered in real-world scenarios.
